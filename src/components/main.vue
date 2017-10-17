<template lang="html">
  <transition name"b-message-fade">
    <div class="b-message" v-show="visible" @mouseenter="clearTimer" @mouseout="startTimer">
      <img class="b-message-icon" :src="imgType" alt=""/>
      <div class="b-message-group">
        <p>{{ message }}</p>
        <div v-if="showClose" class="b-message-closeBtn b-icon-close" @click="handleClose"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'success',
      onClose: null,
      shoClose: false,
      closed: false,
      timer: null
    }
  },
  computed: {
    imgType() {
      return require(`../assets/${ this.type }.svg`);
    }
  },
  watch: {
    closed(newValue) {
      if (newValue) {
        this.visible = false;
        this.$el.addEventListener('transitionend', () => {
          this.$destroy(true);
          this.$el.parentNode.removeChild(this.$el);
        });
      }
    }
  },
  methods: {
    handleClose() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.message.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose();
          }
        }, this.duration);
      }
    },
    mouted() {
      this.startTimer();
    }
  }
}
</script>

<style lang="css">
.b-message {
  width: 300px;
  height: 40px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
  min-width: 300px;
  min-height: 40px;
  padding: 10px 12px;
  border-radius: 2px;
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  margin: auto;
  transition: all .3s ease;
}

.b-message-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
}

.b-message-group {
  margin-left: 40px;
  position: relative;
}

.b-message-group p {
  font-size: 14px;
  line-height: 20px;
  margin: 0 34px 0 0;
  white-space: nowrap;
  color: #8492a6;
  text-align: justify;
}

.b-message-closeBtn {
  font-family: element-icons!important;
  top: 0;
  right: 0;
  position: absolute;
  cursor: pointer;
  color: #c0ccda;
  font-size: 14px;
}

.b-message-closeBtn:before {
  content: "\E913";
}

.b-message-fade-enter {
  transform: translateY(-100px);
}

.b-message-fade-leave-active {
  transform: translateY(-100px);
}
</style>
