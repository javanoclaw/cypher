// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {models} from '../models';

export function DeleteCypherByDomain(arg1:string):Promise<void>;

export function FuzzySearch(arg1:string,arg2:string):Promise<Array<models.Credential>>;

export function GetCredentialByDomain(arg1:string):Promise<models.Credential>;

export function ListCredential():Promise<Array<models.Credential>>;

export function SetCredential(arg1:models.Credential):Promise<models.Credential>;
