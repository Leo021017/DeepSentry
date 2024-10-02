class PhoneInfo {

	constructor() {

		this.runtimeMainActivity = null;

		this.sms_cs = null;
		this.sms_read_finished = false;

		this.call_log = null;
		this.call_log_cs = null;
		this.call_log_read_finished = false;

		this.data_contacts = [];
		this.data_sms = [];
		this.data_call_log = [];
	}

	pushData(list, data) {
		if (list == "" || list == null || list == undefined) {
			list = [];
		}
		if (!data) {
			return list;
		}
		if (list.length <= 0) {
			list.push(data);
			return list;
		}
		var needAdd = true;
		let targetData = JSON.stringify(data);
		for (let sourceData of list) {
			let checkData = JSON.stringify(sourceData);
			if (targetData == checkData) {
				needAdd = false;
				break;
			}
		}
		if (needAdd) {
			list.push(data);
		}
		return list;
	}
	pushSMS(data) {
		this.data_sms = this.pushData(this.data_sms, data);
	}
	pushCALLLOG(data) {
		this.data_call_log = this.pushData(this.data_call_log, data);
	}
	isAndroid() {
		// #ifdef APP-PLUS
		return plus.os.name == "Android";
		// #endif
		return false;
	}


	getRuntimeMainActivity() {
		if (!this.isAndroid()) {
			return null;
		}
		if (this.runtimeMainActivity == null) {
			this.runtimeMainActivity = plus.android.runtimeMainActivity();
		}
		return this.runtimeMainActivity;
	}


	buildCallLogData(cs) {
		var number = cs.getString(cs.getColumnIndex(this.call_log.Calls.NUMBER));
		var type;
		switch (parseInt(cs.getString(cs.getColumnIndex(this.call_log.Calls.TYPE)))) {
			case this.call_log.Calls.INCOMING_TYPE:
				type = '呼入';
				break;
			case this.call_log.Calls.OUTGOING_TYPE:
				type = '呼出';
				break;
			case this.call_log.Calls.MISSED_TYPE:
				type = '未接';
				break;
			default:
				type = '挂断';
				break;
		}
		var date = new Date(parseInt(cs.getString(cs.getColumnIndexOrThrow(this.call_log.Calls.DATE))));
		var Name_Col = cs.getColumnIndexOrThrow(this.call_log.Calls.CACHED_NAME);
		var name = cs.getString(Name_Col);
		var Duration_Col = cs.getColumnIndexOrThrow(this.call_log.Calls.DURATION);
		var duration = cs.getString(Duration_Col);

		return {
			name: name, // 联系人的姓名
			mobile: number, // 联系人电话
			callTime: date, // 呼入或呼出时间
			talkTime: duration, // 通话时长
			type: type
		};
	}

	buildSmsData(cs) {
		var index_Address = cs.getColumnIndex('address');
		var address = cs.getString(index_Address);
		var index_Body = cs.getColumnIndex('body');
		var body = cs.getString(index_Body);
		var index_Type = cs.getColumnIndex('type');
		var type = cs.getString(index_Type);
		return {
			tel: address,
			content: body,
			type: type
		}
	}

	/**
	 * 读取所有短信
	 */
	async readSms(size) {
		if (!this.isAndroid()) {
			return;
		}

		return new Promise((resolve, reject) => {
			uni.showLoading({
				mask:true,
				title:'正在加载...'
			})
			try {
				var main = this.getRuntimeMainActivity();
				var Uri = plus.android.importClass('android.net.Uri');
				var ContactsContract = plus.android.importClass('android.provider.ContactsContract');
				var uri = Uri.parse('content://sms/');
				var cr = main.getContentResolver();
				plus.android.importClass(cr);
				this.sms_cs = cr.query(uri, null, null, null, null);
				plus.android.importClass(this.sms_cs);
				var count = 0;
				let res = this.sms_cs.moveToNext();
				while (res) {
					let data = this.buildSmsData(this.sms_cs);
					this.pushSMS(data);
					count++;
					if (count > size) {
						break;
					}
					res = this.sms_cs.moveToNext();
				}
				uni.hideLoading()
				resolve(this.data_sms)
				this.sms_read_finished = !res;
			} catch (e) {
				uni.hideLoading()
				reject('error')
			}

		})

	}

	/**
	 * 读取所有通话记录
	 */
	async readCallLog(size) {
		if (!this.isAndroid()) {
			return;
		}
		return new Promise((resolve, reject) => {
			uni.showLoading({
				mask:true,
				title:'正在加载...'
			})
			try {
				this.call_log = plus.android.importClass('android.provider.CallLog');
				var ContentResolver = plus.android.importClass('android.content.ContentResolver');
				var activity = this.getRuntimeMainActivity();
				var resolver = activity.getContentResolver();
				plus.android.importClass(resolver);
				var String = plus.android.importClass('java.lang.String');
				this.call_log_cs = resolver.query(this.call_log.Calls.CONTENT_URI, null, null, null, this
					.call_log.Calls
					.DEFAULT_SORT_ORDER);
				plus.android.importClass(this.call_log_cs);
				var count = 0;
				let res = this.call_log_cs.moveToNext();
				while (res) {
					let data = this.buildCallLogData(this.call_log_cs);
					this.pushCALLLOG(data);
					count++;
					if (count > size) {
						break;
					}
					res = this.call_log_cs.moveToNext();
				}
				uni.hideLoading()
				resolve(this.data_call_log)
			} catch (e) {
				uni.hideLoading()
				reject('error')
			}
		})

	}

	/**
	 * 读取所有通讯录
	 */
	async readContacts() {
		return new Promise((resolve, reject) => {
			uni.showLoading({
				mask:true,
				title:'正在加载...'
			})
			try {
				plus.contacts.getAddressBook(
					plus.contacts.ADDRESSBOOK_PHONE,
					function(addressbook) {
						addressbook.find(
							['displayName', 'phoneNumbers'],
							function(contacts) {
								if (contacts) {
									let phones = [];
									for (let c of contacts) {
										let numbs = c.phoneNumbers;
										let ps = [];
										for (let n of numbs) {
											ps.push(n.value);
										}
										phones.push({
											name: c.displayName,
											phones: ps
										});
									}
									uni.hideLoading()
									resolve(phones);
								} else {
									uni.hideLoading()
									resolve(null);
								}
							},
							function() {
								uni.hideLoading()
								resolve(null);
							}, {
								multiple: true
							}
						);
					},
					function(e) {
						uni.hideLoading()
						resolve(null);
					}
				);
			} catch (e) {
				uni.hideLoading()
				resolve(null);
			}
		});
	}


	async needPermission(callback) { //需要的授权
		// #ifdef APP-PLUS
		return await new Promise((resolve, reject) => {
			plus.android.requestPermissions(
				['android.permission.READ_SMS', 'android.permission.RECEIVE_SMS',
					'android.permission.READ_CALL_LOG',
					'android.permission.WRITE_CALL_LOG'
				],
				function(e) {
					if (e.deniedAlways.length > 0) {
						resolve(false);
						return;
					}
					if (e.deniedPresent.length > 0) {
						resolve(false);
						return;
					}
					resolve(true);
					return;
				},
				function(e) {
					resolve(false);
				}
			);
		});

		// #endif
	}
}

export default PhoneInfo;