import { Injectable } from '@angular/core';
// import * as crypto from 'crypto';
@Injectable({
  providedIn: 'root',
})
export class HexGenService {
  constructor() {}
  // getSha256 = (buffer:any) => crypto.createHash('sha256').update(buffer).digest();
  
  getCodeVerifierAndCodeChallenge = () => {
    let verifier = crypto.randomBytes(46);
    
    // let challenge = this.getSha256(verifier);
    return {
      // code_verifier: verifier.toString(),
      // code_challenge: challenge.toString(),
    };
  };
}
