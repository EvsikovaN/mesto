export class UserInfo {
  constructor({selectorName, selectorDetail}) {
    this._name = document.querySelector(selectorName);
    this._detail = document.querySelector(selectorDetail);
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      detail: this._detail.textContent
    };
    return user;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._detail.textContent = item.detail;
  }
}
