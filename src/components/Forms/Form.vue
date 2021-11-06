<template>
<!-- Default form register -->
<div class="container">
	<div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
		<div class="rounded-t bg-white mb-0 px-6 py-6">
		<h6 class="text-blueGray-400 text-sm mt-3 mb-6 ml-3 font-bold uppercase">
			Take Screenshot
		</h6>
		<!-- Components Start -->
		<div class="flex flex-wrap">
			<!-- Domain Input -->
			<div class="w-full lg:w-6/12 px-4">
				<div class="relative w-full mb-3">
					<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					htmlFor="grid-password"> Domain </label>
					<input type="text" name="domain" id="domain" v-model="domain" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
					placeholder="Enter Domain"/>
				</div>
			</div>
			<!-- Username Input -->
			<div class="w-full lg:w-6/12 px-4">
				<div class="relative w-full mb-3">
					<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					htmlFor="grid-password"> Username </label>
					<input type="text" name="username" id="username" v-model="username" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
					placeholder="Enter Username"/>
				</div>
			</div>
			<!-- Password Input -->
			<div class="w-full lg:w-6/12 px-4 mt-3">
				<div class="relative w-full mb-3">
					<label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
					htmlFor="grid-password"> Password </label>
					<input type="password" name="password" id="password" v-model="password" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
					placeholder="Enter Password"/>
				</div>
			</div>
		</div>
		<!-- Component End  -->
		<button @click="postData()" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-3 mt-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-emerald-800" type="button">
			<i class="fas fa-paper-plane"></i>&nbsp;
			Send Data
		</button>
		</div>
	</div>
	<div class="outputArea w-full  sm:w-1/2">
			<h1 class="font-bold text-xl mt-10 ml-5 mb-4">Result : </h1>
			<div id="preview" v-if="isFetched">
				<img :src="baseImg" alt="Gambar"/>
				<div class="text-center">
				<button  class="bg-blue-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-3 mt-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-emerald-800" type="button">
					<i class="fas fa-download"></i>&nbsp;
					Download
					</button>
				</div>
			</div>
			<div id="preview">
				Not fetched
			</div>
	</div>
</div>

</template>

<script>
import axios from "axios"
import NProgress from "nprogress"

// const httpAgent = new http.Agent({ keepAlive: true });
export default {
	name: "Form",
	data() {
		return {
			baseImg: "",
			isFetched: false
	};
},
methods: {
async postData() {
	try {
			NProgress.start()
			const result =  await axios.post("https://bot.adepthq.com:5050/data", {
				domain: this.domain,
				username: this.username,
				password: this.password
			});
			this.baseImg = "data:image/png;base64, "+result.data.data;
			this.isFetched = true;
			console.log("data:image/png;base64, "+result.data.data);
			this.domain = "";
			this.username = "";
			this.password = "";
			const img = new Image();
			img.src = "data:image/jpeg;base64, " + result.data.data;
			NProgress.done();
			return img;
		} catch (err) {
			console.log(err);
		} finally {
			console.log('success')
		}
	},
}
}

</script>
<style></style>