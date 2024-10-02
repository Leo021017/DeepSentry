# li-getPhoneInfo
###安卓端
可读取通话记录，通讯录，短信
```使用方式```
```javascript
import PhoneInfo from './PhoneInfo.js';
const $phoneInfo = new PhoneInfo();
//首先需要拉起授权
$phoneInfo.needPermission((res) => {});
//读取通讯录
$phoneInfo.readContacts()
//读取短信
$phoneInfo.readSms()
//读取通话记录
$phoneInfo.readCallLog()
```
###IOS端
只可读取通信录


###需要的授权
android.permission.WRITE_CONTACTS
android.permission.READ_CONTACTS
android.permission.GET_ACCOUNTS

android.permission.READ_CALL_LOG
android.permission.WRITE_CALL_LOG

android.permission.READ_SMS
android.permission.RECEIVE_SMS