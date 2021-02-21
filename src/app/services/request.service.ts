import { Injectable } from '@angular/core';
import { environment as env } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AirtimeDataVendStruct, AirtimeDataVerify, AirtimeVerifyResponse, DataBundlesResponse } from '../interfaces/app-structs';


@Injectable({
	providedIn: 'root'
})
export class RequestService {
	public baseUrl = env.baseUrl;

	constructor(
		private http: HttpClient
	) { }

	// startAccount(phone: {phone: string}): Observable<AgentResponse> {
	// 	return this.http.post<AgentResponse>(`${this.baseUrl}/agent/new`, phone);
	// }

	// continueAccount(data: CreateContinue): Observable<AgentResponse> {
	// 	return this.http.post<AgentResponse>(`${this.baseUrl}/agent/continue`, data);
	// }

	// singleAgent(agentId: number): Observable<AgentResponse> {
	// 	return this.http.get<AgentResponse>(`${this.baseUrl}/agent/${agentId}`);
	// }

	verifyAirtimeBulk(data: AirtimeDataVerify): Observable<AirtimeVerifyResponse> {
		return this.http.post<AirtimeVerifyResponse>(`${this.baseUrl}/entry/airtime/verify`, data);
	}
	vendAirtimeBulk(data: AirtimeDataVendStruct): Observable<AirtimeVerifyResponse> {
		return this.http.post<AirtimeVerifyResponse>(`${this.baseUrl}/entry/airtime/vend`, data);
	}

	verifyDataBulk(data: AirtimeDataVerify): Observable<AirtimeVerifyResponse> {
		return this.http.post<AirtimeVerifyResponse>(`${this.baseUrl}/entry/data/verify`, data);
	}
	vendDataBulk(data: AirtimeDataVendStruct): Observable<AirtimeVerifyResponse> {
		return this.http.post<AirtimeVerifyResponse>(`${this.baseUrl}/entry/data/vend`, data);
	}

	getMtnDataPackages(): Observable<DataBundlesResponse> {
		return this.http.get<DataBundlesResponse>(`${this.baseUrl}/entry/data/bundles/5`);
	}
	getAirtelDataPackages(): Observable<DataBundlesResponse> {
		return this.http.get<DataBundlesResponse>(`${this.baseUrl}/entry/data/bundles/7`);
	}
	getEtisalatDataPackages(): Observable<DataBundlesResponse> {
		return this.http.get<DataBundlesResponse>(`${this.baseUrl}/entry/data/bundles/6`);
	}
	getGloDataPackages(): Observable<DataBundlesResponse> {
		return this.http.get<DataBundlesResponse>(`${this.baseUrl}/entry/data/bundles/28`);
	}
	getSmileDataPackages(): Observable<DataBundlesResponse> {
		return this.http.get<DataBundlesResponse>(`${this.baseUrl}/entry/data/bundles/8`);
	}
	getSpectranetDataPackages(): Observable<DataBundlesResponse> {
		return this.http.get<DataBundlesResponse>(`${this.baseUrl}/entry/data/bundles/9`);
	}

}
