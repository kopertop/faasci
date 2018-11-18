/**
 * Approve an Email Overage request
 */
export interface CNBEmailOverageApprovalRequest {
	formid: number;
	uniqueid: number;
	handshakekey: string;
	senderid?: string;
	customerid?: number;
	company_name: string;
	company_website: string;
	requested_limit: number;
	expected_email_frequency: string;
	your_use_case: string;
	name: string;
	email: string;
	signature: string;
}


/**
 * Lambda Hook
 *
 * @param event: Should be from Integromat in the form of a CNBEmailOverageApprovalRequest
 */
export async function handler(event: CNBEmailOverageApprovalRequest) {
	if (!event || !event.handshakekey || event.handshakekey !== process.env.HANDSHAKE_KEY) {
		throw new Error('Invalid Handshake Key');
	}
	console.log(event);
	return 'OK';
}
