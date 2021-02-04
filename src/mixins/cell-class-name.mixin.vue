<script>
((global) => {
  global.mixins.cellClassName = {
    computed: {
      cellClassName () {
        return ({ columnIndex }) => {
          const count = this.columnCount;
          if (!count) return '';

          switch (columnIndex) {
            case count - 1:
              return 'last-column';
            case count:
              return 'gap-column';
            default:
              return '';
          }
        };
      },
    },
  };
})(window);
</script>
