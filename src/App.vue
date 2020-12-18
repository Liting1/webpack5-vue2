<template>
<div>
	<h1>{{txt}}</h1>
	<div>
		<img src="@/assets/tuite.png">
	</div>
	<div class="box"></div>
</div>
</template>

<script>
export default {
	data(){
		return {
			txt: 'hello Vue.js'
		}
	}
}
</script>

<style scoped lang="sass">
h1 
	color: red
.box
	width: 300px
	height: 200px
	border: solid 1px #000
	background: url('@/assets/tuite.png') no-repeat center
</style>