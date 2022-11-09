const app = Vue.createApp({
  data() {
      return {
        tvScreenOn: false,
        channel: "",
        selectedChannel: 0,
        channels: [
          {id:1, channel: './assets/images/noah-or-mandela.gif' },
          {id:2, channel: './assets/images/finance.gif' },
          {id:3, channel: './assets/images/lovechannel.gif' },
          {id:4, channel: './assets/images/C6aG-J.gif' },
          {id:5, channel: './assets/images/vikie.gif' },
        ]
      }
  },
  methods: {
    powerOn() {
      if (this.tvScreenOn) {
        this.tvScreenOn = false
      } else {
        this.tvScreenOn = true
      }
    },
    channelUp() {
      if (this.selectedChannel >=0 && this.selectedChannel <= this.channels.length) {
        this.channel = this.channels[this.selectedChannel].channel
        this.selectedChannel += 1
        // return
      }
    },
    channelDown() {
      if (this.selectedChannel > 0 && this.selectedChannel <= this.channels.length) {
          this.channel = this.channels[this.selectedChannel].channel
          this.selectedChannel -= 1
        return
      }
}
     
}})
