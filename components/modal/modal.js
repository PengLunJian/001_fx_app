Component({
  mixins: [],
  data: {
    clazz:'modal'
  },
  props: {
    isShow:'isShow',
    person:'person'
  },
  didMount(){
    this.changeModalStatus();
  },
  didUpdate(){
    this.changeModalStatus();
  },
  didUnmount(){},
  methods: {
    onHandleClose(){
      this.props.onHandleHideModal();
    },
    changeModalStatus(){
      const {isShow} = this.props;
      const tempClazz = isShow?'modal in':'modal in out';
      this.setData({
        clazz:tempClazz
      });
    }
  },
})