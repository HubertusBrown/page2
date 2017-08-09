import { Injectable } from '@angular/core';
import { LinkGroup } from "app/links/link-group.model";
import { Http, RequestOptions, Headers, Response } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class LinkService {

  
  constructor(private http: Http) {}

  validateLinkUrl(url: string): string {
    if (!url.startsWith('http')) {
      url = 'http://' + url;
    }
    return url;
  }

  resolveFavicon(url: string): string {
    url = this.validateLinkUrl(url);
    let basicUrlEndIndex = url.indexOf('/', 8);
    if (basicUrlEndIndex === -1) {
      url = url + '/';
      basicUrlEndIndex = url.length;
    }
    let faviconUrl = url.substring(0, basicUrlEndIndex + 1) + 'favicon.ico';
    return faviconUrl;
  }


}
