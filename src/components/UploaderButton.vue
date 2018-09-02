<template>
    <div>
      <button class="uploader_button">
        <slot></slot>
        <input type="file" name="" @change="$emit('change')" >
      </button>
    </div>
</template>

<script>
export default {
  name: 'UploaderButton'
}
</script>

<style scoped>
  .uploader_button {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    font-size: 14px;
  }
  .uploader_button input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
  }
  .uploader_button:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
