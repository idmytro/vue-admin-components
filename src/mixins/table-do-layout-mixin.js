export default {
  data () {
    return {
      tableHeight: null,
      observer: null,
    };
  },
  beforeDestroy () {
    this.observer.unobserve(this.$refs.tableWrap);
  },
  created () {
    /* FIXME
    ResizeObserver is not supported in Safari 13, op_mob 46, KaiOS 2.5,
    Firefox 68, Edge 18, Baidu 7.12, Android UC Browser 12.12, and_ff 68
    eslint (compat/compat)  */
    // eslint-disable-next-line compat/compat
    this.observer = new ResizeObserver(this.doLayout);
  },
  mounted () {
    if (!this.$refs.tableWrap) {
      console.warn('not found tableWrap');
      return;
    }
    this.$nextTick(() => {
      this.observer.observe(this.$refs.tableWrap);
      this.setTableHeight();
    });
  },
  methods: {
    setTableHeight () {
      if (!this.$refs.tableWrap) {
        console.warn('not found tableWrap');
        return;
      }
      this.tableHeight = this.$refs.tableWrap.offsetHeight;
    },
    doLayout () {
      this.setTableHeight();
      if (this.$refs.table) this.$refs.table.doLayout();
    },
  },
};
