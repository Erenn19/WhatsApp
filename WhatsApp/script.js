class UserCard extends HTMLElement {
    constructor() {
      super();
  
      this.imagePath = "";
      this.userName = "";
      this.messageText = "";
      this.time = "";
    }
  
    connectedCallback() {
      this.imagePath = this.getAttribute("imagePath");
      this.userName = this.getAttribute("userName");
      this.messageText = this.getAttribute("messageText");
      this.time = this.getAttribute("time");
  
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div class="sidebar-chat">
            <div class="chat-avatar">
                <img src="${this.imagePath}" alt="">
            </div>
            <div class="chat-info">
                <h4>${this.userName}</h4>
                <p>${this.messageText}</p>
            </div>
            <div class="time">
                <p>${this.time}</p>
            </div>
        </div>
        `;
    }
  }
  
  customElements.define("user-card", UserCard);