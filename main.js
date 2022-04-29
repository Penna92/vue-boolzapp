const app = new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        id: 1,
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di stendere i panni",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        id: 2,
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        id: 3,
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        id: 4,
        name: "Alessandro B.",
        avatar: "_4",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
      {
        id: 5,
        name: "Alessandro L.",
        avatar: "_5",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ricordati di chiamare la nonna",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Va bene, stasera la sento",
            status: "received",
          },
        ],
      },
      {
        id: 6,
        name: "Claudia",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao Claudia, hai novità?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Non ancora",
            status: "received",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "Nessuna nuova, buona nuova",
            status: "sent",
          },
        ],
      },
      {
        id: 7,
        name: "Federico",
        avatar: "_7",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Fai gli auguri a Martina che è il suo compleanno!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Grazie per avermelo ricordato, le scrivo subito!",
            status: "received",
          },
        ],
      },
      {
        id: 8,
        name: "Davide",
        avatar: "_8",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Ciao, andiamo a mangiare la pizza stasera?",
            status: "received",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
            status: "sent",
          },
          {
            date: "10/01/2020 15:51:00",
            message: "OK!!",
            status: "received",
          },
        ],
      },
    ],
    activeIndex: 0,
    activeMessageIndex: "",
    newMessage: "",
    filtro: "",
    dropDownMenu: false,
    isWriting: false,
    darkMode: false,
    newContact: "",
    scrollIntoViewOptions: {
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    },
    emoji: false,
    splashPage: false,
    welcomePage: false,
    fontSize: null,
    emojis: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "😋",
      "😛",
      "😝",
      "😜",
      "🤪",
      "🤨",
      "🧐",
      "🤓",
      "😎",
      "🤩",
      "🥳",
      "😏",
      "😒",
      "😞",
      "😔",
      "😟",
      "😕",
      "🙁",
      "☹️",
      "😣",
      "😖",
      "😫",
      "😩",
      "🥺",
      "😢",
      "😭",
      "😤",
      "😠",
      "😡",
      "🤬",
      "🤯",
      "😳",
      "🥵",
      "🥶",
      "😱",
      "😨",
      "😰",
      "😥",
      "😓",
      "🤗",
      "🤔",
      "🤭",
      "🤫",
      "🤥",
      "😶",
      "😐",
      "😑",
      "😬",
      "🙄",
      "😯",
      "😦",
      "😧",
      "😮",
      "😲",
      "😴",
      "🤤",
      "😪",
      "😵",
      "🤐",
      "🥴",
      "🤢",
      "🤮",
      "🤧",
      "😷",
      "🤒",
      "🤕",
      "🤑",
      "🤠",
      "😈",
      "👿",
      "👹",
      "👺",
      "🤡",
      "💩",
      "👻",
      "💀",
      "☠️",
      "👽",
      "👾",
      "🤖",
      "🎃",
      "😺",
      "😸",
      "😹",
      "😻",
      "😼",
      "😽",
      "🙀",
      "😿",
      "😾",
    ],
  },

  methods: {
    // CAMBIA DIMENSIONE DEL FONT
    biggerFont() {
      if (this.fontSize == false) {
        this.fontSize = null;
      } else if (this.fontSize == null) {
        this.fontSize = true;
      } else {
        return;
      }
    },
    smallerFont() {
      if (this.fontSize == true) {
        this.fontSize = null;
      } else if (this.fontSize == null) {
        this.fontSize = false;
      } else {
        return;
      }
    },

    // VISUALIZZARE LISTA DI EMOJI
    showEmoji() {
      if (this.emoji == false) {
        this.emoji = true;
      } else if (this.emoji == true) {
        this.emoji = false;
      }
    },

    // VISUALIZZARE LA CHAT CORRISPONDENTE AL CONTATTO
    changeOnClick(id) {
      this.welcomePage = false;
      this.dropDownMenu = false;
      this.activeMessageIndex = "";
      const index = this.contacts.findIndex((contact) => {
        return contact.id === id;
      });
      this.activeIndex = index;
    },

    // INVIARE MESSAGGI E RICEVERE UNA RISPOSTA RANDOMICA DOPO QUALCHE SECONDO (CON AGGIORNAMENTI DI STATO)
    sendMessage(activeIndex) {
      this.dropDownMenu = false;
      let soloSpazi = false;
      if (this.newMessage === "") return;
      for (let i = 0; i < this.newMessage.length; i++) {
        if (this.newMessage[i] !== " ") {
          soloSpazi = true;
        }
      }
      if (soloSpazi == false) return;
      const nuovoMessaggio = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        message: this.newMessage,
        status: "sent",
      };
      this.contacts[activeIndex].messages.push(nuovoMessaggio);
      this.newMessage = "";
      this.isWriting = true;
      setTimeout(() => {
        this.scrollToElement();
      }, 100);
      setTimeout(() => {
        this.isWriting = false;
        const randomReplies = [
          "Daje!",
          "Anvedi!",
          "Aspetta un attimo che ho da fare...",
          "Ti richiamo fra poco",
          "Perchè mi dici questo?",
          "Ma sei sicuro?",
          "Non ci posso credere!",
          "Scusa!",
          "Weeeee grandissimo!!",
          "Sono felice di sentirti",
          "Sto guidando!",
          "Ho la batteria quasi scarica",
          "Mi stanno chiamando su Zoom, ti devo lasciare",
        ];
        const messaggioRisposta = {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          message:
            randomReplies[Math.floor(Math.random() * randomReplies.length)],
          status: "received",
        };
        this.contacts[activeIndex].messages.push(messaggioRisposta);
        this.isWriting = null;
        setTimeout(() => {
          this.scrollToElement();
        }, 100);
        setTimeout(() => {
          this.isWriting = false;
        }, 2000);
      }, 3000);
    },

    // AGGIUNGI EMOJI AL CLICK
    addEmoji(index) {
      this.newMessage = this.newMessage + this.emojis[index];
    },

    // VISUALIZZARE MENU PER CANCELLARE UN SINGOLO MESSAGGIO
    showMessageInfo(index) {
      if (this.activeMessageIndex !== index) {
        this.activeMessageIndex = index;
      } else if (this.activeMessageIndex === index) {
        this.activeMessageIndex = "";
      }
    },

    // CANCELLARE UN SINGOLO MESSAGGIO
    deleteMessage(index) {
      this.activeMessageIndex = "";
      if (this.contacts[this.activeIndex].messages.length > 0) {
        this.contacts[this.activeIndex].messages.splice(index, 1);
        console.log(this.contacts[this.activeIndex].messages);
      }
    },

    // CANCELLARE TUTTI I MESSAGGI DELLA CHAT
    deleteAllMessages(activeIndex) {
      this.contacts[activeIndex].messages = [];
      if (this.dropDownMenu == false) {
        this.dropDownMenu = true;
      } else if (this.dropDownMenu == true) {
        this.dropDownMenu = false;
      }
    },

    // APRIRE DROPDOWN MENU DAI 3 PUNTINI
    showDropDownMenu() {
      if (this.dropDownMenu == false) {
        this.dropDownMenu = true;
      } else if (this.dropDownMenu == true) {
        this.dropDownMenu = false;
      }
    },

    // RIMUOVI INTERA CHAT DALL' ARRAY DI OGGETTI
    removeObject() {
      this.dropDownMenu = false;
      console.log(this.activeIndex, this.contacts);
      this.contacts.splice(this.activeIndex, 1);
    },

    // AGGIUNGI UN NUOVO CONTATTO ALLA LISTA CONTATTI
    addNewContact() {
      let soloSpazi = false;
      if (this.newContact === "") return;
      for (let i = 0; i < this.newContact.length; i++) {
        if (this.newContact[i] !== " ") {
          soloSpazi = true;
        }
      }
      if (soloSpazi == false) return;
      const newContactObj = {
        id: this.contacts.length + 1,
        name: this.newContact,
        avatar: "_new_contact",
        visible: true,
        messages: [],
      };
      this.contacts.unshift(newContactObj);
      this.newContact = "";
    },

    // MODALITA' LIGHT/DARK
    setDarkMode() {
      if (this.darkMode == false) {
        this.darkMode = true;
      } else if (this.darkMode == true) {
        this.darkMode = false;
      }
    },

    // SCROLL ALL'ULTIMO ELEMENTO
    scrollToElement() {
      const el = document.getElementById("chat-area").lastChild;
      el.scrollIntoView(this.scrollIntoViewOptions);
    },
  },

  // MOUNTED
  mounted() {
    this.splashPage = true;
    setTimeout(() => {
      this.splashPage = false;
      this.welcomePage = true;
    }, 2000);
  },

  // COMPUTED
  computed: {
    // FILTRA CONTATTI IN BASE AL LORO NOME
    filteredContacts() {
      return this.contacts.filter((item) => {
        if (item.name.toLowerCase().includes(this.filtro.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
});

// 😀 😃 😄 😁 😆 😅 😂
// 🤣 😊 😇 🙂 🙃 😉
// 😌 😍 🥰 😘 😗 😙 😚
// 😋 😛 😝 😜 🤪 🤨 🧐
// 🤓 😎 🤩 🥳 😏 😒 😞
// 😔 😟 😕 🙁 ☹️ 😣 😖
//                             😫 😩 🥺 😢 😭 😤 😠
//                             😡 🤬 🤯 😳 🥵 🥶 😱
//                             😨 😰 😥 😓 🤗 🤔 🤭
//                             🤫 🤥 😶 😐 😑 😬 🙄
//                             😯 😦 😧 😮 😲 😴 🤤
//                             😪 😵 🤐 🥴 🤢 🤮 🤧
//                             😷 🤒 🤕 🤑 🤠 😈 👿
//                             👹 👺 🤡 💩 👻 💀 ☠️
//                             👽 👾 🤖 🎃 😺 😸 😹
//                             😻 😼 😽 🙀 😿 😾
