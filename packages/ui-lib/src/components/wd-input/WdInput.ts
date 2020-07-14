import { LitElement, customElement, html, css, unsafeCSS, property } from 'lit-element';
let WdInputStyle = require('./WdInput.scss');

@customElement('wd-input')
export class WdInput extends LitElement {

    static get styles() {
        return css`${unsafeCSS(WdInputStyle)} `;
      }
      @property({ type: String }) type = "text";
      @property({ type: String }) label = "Nombre";
      @property({ type: RegExp }) pattern ="[a-zA-Z0-9]";
      @property( { type: Boolean }) pristine = true;
      @property( { type: Boolean }) firstClick = true;
      @property( { type: Boolean }) required = false;


      constructor(){
          super();
          this._isRequired();
      }

    render() {
        return html`
            <input type="${this.type}"  class="input" placeholder=" " @focus=${this._isPristine} @focusout=${this._isPristine} class=${this.pristine? "pristine" : ""}  ?required="${this._isRequired()}">
            <label>${this.label}</label>
            <slot name="errorMsg" ></slot>
        `;
      }
    
    _isPristine(): void{
    
        if(this.firstClick && this.pristine){
            this.pristine = true;
            this._isFirstClick();
        }else{
            this.pristine = false;
        }
    }
    _isFirstClick(): void{
        this.firstClick = false;
    }

    _isRequired():boolean{
        if(this.required && !this.pristine){
           return true
        }else{
           return false;
        }
    }

    
}