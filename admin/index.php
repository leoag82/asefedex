  <!DOCTYPE html>
<html lang="en" ng-app="asefedex">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title> Asefedex  </title>

    <!-- Bootstrap -->
    <link href="assets/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="assets/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="assets/vendors/nprogress/nprogress.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="assets/build/css/custom.css" rel="stylesheet">
  </head>

  <body class="nav-md">
    <div class="container body">
      <div class="main_container">
        <div ng-controller="InitController">
          <div class="col-md-3 left_col">
            <div class="left_col scroll-view">
              <div class="navbar nav_title">
              <img src="assets/images/asefedex.png" style="width: 50px;" class="text-left">
              <a href="index.html" class="site_title text-right"><span>Asefedex</span></a>

              </div>

              <div class="clearfix"></div>

              <!-- menu profile quick info -->
              <div class="profile clearfix">
                <div class="profile_pic">
                  <img src="assets/images/img.jpg" alt="..." class="img-circle profile_img">
                </div>
                <div class="profile_info">
                  <span>Bienvenido,</span>
                  <h2 ng-bind="user"></h2>
                </div>
                <div class="clearfix"></div>
              </div>
              <!-- /menu profile quick info -->

              <br />

              <!-- sidebar menu -->
              <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <div class="menu_section">
                  <h3>General</h3>
                  <ul class="nav side-menu">
                    <li><a href="#!/home"> <i class="fa fa-home"></i> Home 
                    </li>
                    <li>
                      <a href="#!/users"><i class="fa fa-users"></i> Admin. Usuarios</a>                    
                    </li>                  
                    <li>
                      <a href="#!/request.credit"><i class="fa fa-edit"></i> Solicitudes <span class="fa fa-chevron-down"></span></a>
                      <ul class="nav child_menu">

                        <li><a href="#!/christmas-saving">Ahorro Navideño</a></li>
                        <li><a href="#!/requestCredit">Solicitud de Credito</a></li>
                        <li><a href="#!/renounce">Renuncia</a></li>
                        <li><a href="#!/accountStatus">Estado de Cuenta</a></li>
                      </ul>
                        <li>
                        <a href="#!/payments"><i class="fa fa-money"></i>Pagos</a> 
                        </li>
                    </li>
                  </ul>
                </div>

              </div>
              <!-- /sidebar menu -->

              <!-- /menu footer buttons -->
              <div class="sidebar-footer hidden-small" ng-controller="Logout">
                <a data-toggle="tooltip" data-placement="top" title="Settings">
                  <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                  <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Lock">
                  <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                </a>
                <a data-toggle="tooltip" data-placement="top" title="Logout" ng-click="closeSession()" >
                  <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                </a>
              </div>
              <!-- /menu footer buttons -->
            </div>
          </div>

          <!-- top navigation -->
          <div class="top_nav">
            <div class="nav_menu">
              <nav>
                <div class="nav toggle">
                  <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                </div>

                <ul class="nav navbar-nav navbar-right">
                  <li class="">
                    <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <img src="assets/images/img.jpg" alt=""> <span ng-bind="user"></span>
                      <span class=" fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-usermenu pull-right">
                      <li><a href="javascript:;"> Perfil </a></li>
                      <li>
                        <a href="javascript:;">
                          <span class="badge bg-red pull-right">50%</span>
                          <span>Ajustes</span>
                        </a>
                      </li>
                      <li><a href="javascript:;">Ayuda</a></li>
                      <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> Log Out</a></li>
                    </ul>
                  </li>

                  <li role="presentation" class="dropdown">
                    <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-envelope-o"></i>
                      <span class="badge bg-green">6</span>
                    </a>
                    <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                      <li>
                        <a>
                          <span class="image"><img src="assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="image"><img src="assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="image"><img src="assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <a>
                          <span class="image"><img src="assets/images/img.jpg" alt="Profile Image" /></span>
                          <span>
                            <span>John Smith</span>
                            <span class="time">3 mins ago</span>
                          </span>
                          <span class="message">
                            Film festivals used to be do-or-die moments for movie makers. They were where...
                          </span>
                        </a>
                      </li>
                      <li>
                        <div class="text-center">
                          <a>
                            <strong>See All Alerts</strong>
                            <i class="fa fa-angle-right"></i>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <!-- /top navigation -->
        </div>
        <div class="right_col" role="main" style="min-height: 949px;">
          <div class="">
            
            <div ng-view></div>

          </div>
        </div>

        <!-- footer content -->
        <footer>
          <div class="pull-right">
            Asefedex <a href="https://colorlib.com"> propiedad de FedEx CR</a>
          </div>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="assets/vendors/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap -->
    <script src="assets/vendors/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="assets/vendors/fastclick/lib/fastclick.js"></script>
    <!-- NProgress -->
    <script src="assets/vendors/nprogress/nprogress.js"></script>
    <!-- AngularJs -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src="https://code.angularjs.org/1.6.4/angular-cookies.min.js"></script>
    <!-- Conexxion a Firebase -->
    <script src="https://www.gstatic.com/firebasejs/3.9.0/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAoPaSUxdrhsfoS0DosUBChwjLsRrU2Gd8",
        authDomain: "asefedexdb.firebaseapp.com",
        databaseURL: "https://asefedexdb.firebaseio.com",
        projectId: "asefedexdb",
        storageBucket: "asefedexdb.appspot.com",
        messagingSenderId: "118630340006"
      };
      firebase.initializeApp(config);
    </script>    
    <script src="https://cdn.firebase.com/libs/angularfire/2.3.0/angularfire.min.js"></script>
    <script src="https://code.angularjs.org/1.6.4/angular-route.min.js"></script>
    <!-- App Asefedex -->
    <script src="app/app.module.js"></script>  
    <script src="app/app.routes.js"></script>
    <!-- Controllers -->
    <script src="app/components/users/users.controller.js"></script>
    <script src="app/components/users/logout.controller.js"></script>
    <script src="app/components/users/add.controller.js"></script>
    <script src="app/components/users/edit.controller.js"></script>
    <script src="app/components/requestCredit/request.controller.js"></script>
    <script src="app/components/christmas-saving/saving.controller.js"></script>
    <script src="app/components/renounce/renounce.js"></script>
    <script src="app/components/payments/payments.js"></script>
    <script src="app/components/accountStatus/accountStatus.controller.js"></script>
    <script src="app/components/home/home.js"></script>
    <!-- Services -->
    <script src="app/components/users/user.service.js"></script>

    <!-- External Services -->
    <script src="../login/app/components/security/login.service.js"></script>
    <!-- Custom Theme Scripts -->
    <script src="assets/build/js/custom.min.js"></script>
  </body>
</html>
