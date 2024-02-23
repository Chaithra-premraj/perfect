import { LightningElement, track } from 'lwc';

export default class Helloworld extends LightningElement {
        @track customGreeting = 'Hello, World!';

        connectedCallback() {
            // You can customize the greeting by updating the value of customGreeting
            this.customGreeting = 'Hello, Salesforce!';
        }
}