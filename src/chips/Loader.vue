<template>
	<div>
		<div><h3>Загрузка...</h3></div>
		<div id="circular3dG">
			<div id="circular3d_1G" class="circular3dG"></div>
			<div id="circular3d_2G" class="circular3dG"></div>
			<div id="circular3d_3G" class="circular3dG"></div>
			<div id="circular3d_4G" class="circular3dG"></div>
			<div id="circular3d_5G" class="circular3dG"></div>
			<div id="circular3d_6G" class="circular3dG"></div>
			<div id="circular3d_7G" class="circular3dG"></div>
			<div id="circular3d_8G" class="circular3dG"></div>
		</div>
	</div>

</template>

<style scoped>
#circular3dG{
	position:relative;
	width:150px;
	height:150px;
	margin:auto;
}

.circular3dG{
	position:absolute;
	background-color:rgb(138,224,0);
	width:43px;
	height:43px;
	border-radius:45px;
		-o-border-radius:45px;
		-ms-border-radius:45px;
		-webkit-border-radius:45px;
		-moz-border-radius:45px;
	animation-name:bounce_circular3dG;
		-o-animation-name:bounce_circular3dG;
		-ms-animation-name:bounce_circular3dG;
		-webkit-animation-name:bounce_circular3dG;
		-moz-animation-name:bounce_circular3dG;
	animation-duration:0.622s;
		-o-animation-duration:0.622s;
		-ms-animation-duration:0.622s;
		-webkit-animation-duration:0.622s;
		-moz-animation-duration:0.622s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
}

#circular3d_1G{
	left:60px;
	top:10px;
	animation-delay:0.2295s;
		-o-animation-delay:0.2295s;
		-ms-animation-delay:0.2295s;
		-webkit-animation-delay:0.2295s;
		-moz-animation-delay:0.2295s;
}

#circular3d_2G{
	left:93px;
	top:35px;
	animation-delay:0.316s;
		-o-animation-delay:0.316s;
		-ms-animation-delay:0.316s;
		-webkit-animation-delay:0.316s;
		-moz-animation-delay:0.316s;
}

#circular3d_3G{
	left:110px;
	top:68px;
	animation-delay:0.3925s;
		-o-animation-delay:0.3925s;
		-ms-animation-delay:0.3925s;
		-webkit-animation-delay:0.3925s;
		-moz-animation-delay:0.3925s;
}

#circular3d_4G{
	left:103px;
	top:100px;
	animation-delay:0.469s;
		-o-animation-delay:0.469s;
		-ms-animation-delay:0.469s;
		-webkit-animation-delay:0.469s;
		-moz-animation-delay:0.469s;
}

#circular3d_5G{
	left:63px;
	top:110px;
	animation-delay:0.5455s;
		-o-animation-delay:0.5455s;
		-ms-animation-delay:0.5455s;
		-webkit-animation-delay:0.5455s;
		-moz-animation-delay:0.5455s;
}

#circular3d_6G{
	left:13px;
	top:73px;
	animation-delay:0.622s;
		-o-animation-delay:0.622s;
		-ms-animation-delay:0.622s;
		-webkit-animation-delay:0.622s;
		-moz-animation-delay:0.622s;
}

#circular3d_7G{
	left:0px;
	top:20px;
	animation-delay:0.6985s;
		-o-animation-delay:0.6985s;
		-ms-animation-delay:0.6985s;
		-webkit-animation-delay:0.6985s;
		-moz-animation-delay:0.6985s;
}

#circular3d_8G{
	left:25px;
	top:0px;
	animation-delay:0.775s;
		-o-animation-delay:0.775s;
		-ms-animation-delay:0.775s;
		-webkit-animation-delay:0.775s;
		-moz-animation-delay:0.775s;
}

@keyframes bounce_circular3dG{
	0%{
	transform:scale(1)
	}

	100%{
	transform:scale(.3)
	}
}

@-o-keyframes bounce_circular3dG{
	0%{
	-o-transform:scale(1)
	}

	100%{
	-o-transform:scale(.3)
	}
}

@-ms-keyframes bounce_circular3dG{
	0%{
	-ms-transform:scale(1)
	}

	100%{
	-ms-transform:scale(.3)
	}
}

@-webkit-keyframes bounce_circular3dG{
	0%{
	-webkit-transform:scale(1)
	}

	100%{
	-webkit-transform:scale(.3)
	}
}

@-moz-keyframes bounce_circular3dG{
	0%{
	-moz-transform:scale(1)
	}

	100%{
	-moz-transform:scale(.3)
	}
}
</style>
