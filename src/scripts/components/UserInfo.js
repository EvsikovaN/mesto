export class UserInfo {
  constructor({selectorName, selectorDetail, selectorAvatar}) {
    this._name = document.querySelector(selectorName);
    this._about = document.querySelector(selectorDetail);
    this._avatar = document.querySelector(selectorAvatar)
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      about: this._about.textContent
    };
    return user;
  }

  setAvatar(item) {
    this._avatar.style.backgroundImage = `url(${item})`;
  }

  setUserInfo(item) {
    this._name.textContent = item.name;
    this._about.textContent = item.about;
  }
}
