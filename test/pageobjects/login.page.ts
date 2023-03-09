import Page from "./page.js";

class LoginPage extends Page {
  public open() {
    return super.open();
  }

  public get acceptCookiesButton() {
    return $(".cookie-notice__agree-button");
  }
  
  public get loginButton() {
    return $(".header-account__sign-in");
  }
  
  public get inputUsername() {
    return $("#logonId");
  }

  public get inputPassword() {
    return $("#logonPassword");
  }

  public get btnSubmit() {
    return $(".login-popup__secondary-action-send");
  }

  public get btnRegistration() {
    return $(".register-popup__expander");
  }

  public get welcomeMessage() {
    return $(".header-account__name");
  }

  public get emptyEmailErrorMessage() {
    return $(".form-input__error");
  }

  public get emptyPasswordErrorMessage() {
    return $(".form-input__error");
  }

  public get emailAddress() {
    return $("[id='email1']");
  }

  public get password() {
    return $("[id='logonPassword']");
  }

  public get passwordVerify() {
    return $("[id='logonPasswordVerify']");
  }

  public get termAndConditionCheckbox() {
    return $$(".ck-Checkbox__label");
  }

  public get saveProfileButton() {
    return $(".register-popup__secondary-action-send");
  }

  public async acceptCookies() {
    if (await this.acceptCookiesButton.isExisting()) {
      await this.acceptCookiesButton.click();
    }
  }

  public async clickOnInputField(inputField: string) {
    if (inputField === "email") {
      await this.inputUsername.isExisting();
      await this.inputUsername.click();
    } else {
      await this.inputPassword.isExisting();
      await this.inputPassword.click();
    }
  }

  public async clickOnLoginButton() {
    await this.loginButton.waitForDisplayed();
    await this.loginButton.isExisting();
    await this.loginButton.click();
  }

  public async clickOnSubmitButton() {
    await this.btnSubmit.isExisting();
    await this.btnSubmit.click();
  }

  public async clickOnRegistrationButton() {
    await this.btnRegistration.isExisting();
    await this.btnRegistration.click();
  }

  public async enterWrongInput(inputValue, inputField) {
    if (inputField === "email") {
      await this.inputUsername.isExisting();
      await this.inputUsername.click();
      await this.inputUsername.setValue(inputValue);
    } else {
      await this.inputPassword.isExisting();
      await this.inputPassword.click();
      await this.inputPassword.setValue(inputValue);
    }
  }

  public async enterValidInput(inputValue, inputField) {
    if (inputField === "email") {
      await this.inputPassword.isExisting();
      await this.inputPassword.click();
      await this.inputPassword.setValue(inputValue);
    } else {
      await this.inputUsername.isExisting();
      await this.inputUsername.click();
      await this.inputUsername.setValue(inputValue);
    }
  }

  public async setCookie() {

    await browser.setCookies([
      {
      name: 'MUID',
      value: '1DF402C4626564B301761009637065FA'
      },{
        name: 'AWSALBCORS',
       value: '7YiI2ptsf/BTq/XwpD5JOm9dnxp256jxtZBeJHyP6zfoOHaOvg12ghr5sO32Rg7D167Nut+ac4ZVQtRAePa/xlNgoSf27wsQS5jGuhphKxdP0KeusCQH645VAla5'
      },
      {
        name: 'JSESSIONID',
      value: '0000GkAiLgHXclzISUQENgYIBVw:-1'
      },
      {
        name: 'WC_PERSISTENT',
      value: 'SCcTOItAtKFc5Tq%2Fnu%2BvlSGupvSCHxSHm577JPh6KW4%3D%3B2023-03-07+22%3A12%3A43.106_1678185159340-8584234_20019'
      },
      {
        name: 'WC_AUTHENTICATION_1156703354',
      value: '1156703354%2CxACeKnvfIaUQUOCT7tDT0xT8Re0QVJk0Deg0PLXnTvo%3D'
      },
      {
        name: 'sc_at',
      value: 'v2|H4sIAAAAAAAAAAXBgQ0AIAgDsItIcCLgOWbKFRxvq4+lZZS7QLG4W/YblOMIHlakV/fwSADTtPUDUUQgbjIAAAA='
      },
      {
        name: 'utag_main',
      value: '_sn:1$_se:4$_ss:0$_st:1678225368405$ses_id:1678223536204%3Bexp-session$_pn:2%3Bexp-session$facebook_fbp:1678222337382.3009712122$dc_visit:1$dc_event:4%3Bexp-session$v_id:0186bdeb6e130012f68b91e26f1b05075001b06d00942$vapi_domain:calvinklein.nl$dc_region:eu-west-1%3Bexp-session'
      }
      
  ])
  }

  public async login(username: string, password: string) {
    await this.loginButton.click();
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public async addProfileDetails(
    password: string
  ) {
    let emailString = Math.random().toString(36);
    emailString = emailString.concat("@gmail.com");
    console.log(emailString);
    await this.emailAddress.setValue(emailString);
    await this.password.setValue(password);
    await this.passwordVerify.setValue(password);
  }

  public async clickOnPolicyCheckBox() {
    await this.termAndConditionCheckbox[4].click();
  }

  public async clickOnSaveProfileButton() {
    await this.saveProfileButton.click();
  }
}

export default new LoginPage();
