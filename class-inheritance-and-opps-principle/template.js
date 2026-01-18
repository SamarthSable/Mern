//template pattern

//steps  = predefined in parent class

class AuthService {
  login() {
    this.validate();
    this.processCredentials();
    this.createSession();
  }

  validate() {
    console.log("logic related to validation");
  }

  processCredentials() {
    throw new Error("Processing needed to be implemented");
  }

  createSession() {
    console.log("logic related to session creating here");
  }
}

class GoogleAuthService extends AuthService {
  processCredentials() {
    console.log("Implementation for credentioal processsing - google");
  }
}

class YahooEmailServices extends AuthService {
  processCredentials() {
    console.log("Yahoo- Credential processing");
  }
}

const googleService = new GoogleAuthService();
googleService.login();

const yahooService = new YahooEmailServices();

yahooService.login();
