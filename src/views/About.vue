<template>
<html>
<head>
	<title>Login Page</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Connexion</h3>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
							<input type="text" class="form-control" placeholder="username">
					</div>

					<div class="input-group form-group">
						<input type="password" class="form-control" placeholder="password">
					</div>
				
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
          <div class="form-group">
						<input type="submit" value="Annuler" class="btn float-left login_btn" to="/">

					</div>
				</form>
			</div>
      
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Vous n'avez pas de compte?<a href="#">S'inscrire</a>
				</div>
			
			</div>
		</div>
	</div>
</div>
</body>
</html>
</template>

<style scoped>
html,body{
/*background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');*/
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}

.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: 10%;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}
.form-control{
  color:white;
}
input{
  color:white;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
text-align: center;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
text-align: center;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>
