import { request } from "../../../hook/request";

export function useSendEmailMessage() {

    function sendMessageToMail() {
        request('/api/mail', 'POST', null);
    }

    return {
        sendMessageToMail
    }
}