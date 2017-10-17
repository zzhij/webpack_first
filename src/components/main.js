import Vue from 'vue'
let MessageConstructor = Vue.extend(require('./main.vue'));
let instance;
let instances = [];
let seed = 1;
let Message = function(options) {
  options = options || {};
  if(typeof options === 'string'){
    options = {
      message: options
    };
  }
  let userOnClose = options.onClose;//3.options并没有这个属性啊
  let id = 'message_' + seed++;

  options.onClose = function(){//4.这个如果放到3前面就好解释了，为什么在3后面呢？
    Message.close(id, userOnClose);//5.为什么又把userOnClose传进去了？不就是等于传自己进去吗？
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instances.push(instance);
};

['succes', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {//6.Message在上文是函数啊，Message哪里跑出来的type属性？
    if(typeof options === 'string'){
      options = {
        message: options
      };
      options.type= type;
      return Message(options);
    };
  }
});

Message.close = function(id, userOnClose){//7.不是很懂这段代码的意思，作用是什么？
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
}

export default Message;
