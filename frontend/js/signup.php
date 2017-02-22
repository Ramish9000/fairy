<?php 

$signup: true;

?>

<div class="Welcome_Page">

	<div class="Welcome_Centered_Container">

		<!-- 1 -->
		<div class="Welcome_Logo--Container">

			<a ui-sref="home"><img ng-src="./css/Images1/logo.jpg" class="Welcome_Logo"></a>

		</div>

		<!-- 2 -->
		<div class="Welcome_Caption--Container">

			<h3 class="Welcome_Caption">Wardrobe Fairy</h3>

		</div>

		<!-- 3 -->
		<div class="Welcome_Buttons--Container">

			<form ng-submit="users.signup()">

				<div class="Block1">

					<input class="first_input" type="text" name="name" placeholder="Name" ng-model="users.user.name">
					<input type="text" name="email" placeholder="Email" ng-model="users.user.email">

					<input type="text" name="username" placeholder="Username" ng-model="users.user.username">
					<input type="password" name="password" placeholder="Password" ng-model="users.user.password">

				</div>

				<div class="Block2">

					<button type="submit" name="submit">

						SIGNUP

					</button>

				</div>

			</form>

		</div>

	</div> <!-- END Welcome_Centered_Container -->

</div> <!-- END Welcome_Page -->

</section>
