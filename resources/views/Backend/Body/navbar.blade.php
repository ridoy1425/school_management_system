<nav class="navbar navbar-light navbar-glass navbar-top navbar-expand" style="display: none;">
    <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
    <a class="navbar-brand me-1 me-sm-3" href="index.html">
      <div class="d-flex align-items-center"><img class="me-2" src="{{ url('Backend') }}/assets/img/icons/spot-illustrations/falcon.png" alt="" width="40" /><span class="font-sans-serif">falcon</span></div>
    </a>
    <ul class="navbar-nav align-items-center d-none d-lg-block">
      <li class="nav-item">
        <div class="search-box" data-list='{"valueNames":["title"]}'>
          <form class="position-relative" data-bs-toggle="search" data-bs-display="static"><input class="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
            <span class="fas fa-search search-box-icon"></span>
          </form>
          <div class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none" data-bs-dismiss="search"><button class="btn btn-link btn-close-falcon p-0" aria-label="Close"></button></div>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
      <li class="nav-item">
        <div class="theme-control-toggle fa-icon-wait px-2"><input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span class="fas fa-sun fs-0"></span></label><label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span class="fas fa-moon fs-0"></span></label></div>
      </li>
      <li class="nav-item d-none d-sm-block">
        <a class="nav-link px-0 notification-indicator notification-indicator-warning notification-indicator-fill fa-icon-wait" href="app/e-commerce/shopping-cart.html"><span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span><span class="notification-indicator-number">1</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span></a>
        <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
          <div class="card card-notification shadow-none">
            <div class="card-header">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <h6 class="card-header-title mb-0">Notifications</h6>
                </div>
                <div class="col-auto ps-0 ps-sm-3"><a class="card-link fw-normal" href="#">Mark all as read</a></div>
              </div>
            </div>
            <div class="scrollbar-overlay" style="max-height:19rem">
              <div class="list-group list-group-flush fw-normal fs--1">
                <div class="list-group-title border-bottom">NEW</div>
                <div class="list-group-item">
                  <a class="notification notification-flush notification-unread" href="#!">
                    <div class="notification-avatar">
                      <div class="avatar avatar-2xl me-3">
                        <img class="rounded-circle" src="{{ url('Backend') }}/assets/img/team/1-thumb.png" alt="" />
                      </div>
                    </div>
                    <div class="notification-body">
                      <p class="mb-1"><strong>Emma Watson</strong> replied to your comment : "Hello world ðŸ˜"</p>
                      <span class="notification-time"><span class="me-2" role="img" aria-label="Emoji">ðŸ’¬</span>Just now</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="card-footer text-center border-top"><a class="card-link d-block" href="app/social/notifications.html">View all</a></div>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown"><a class="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div class="avatar avatar-xl">
            <img class="rounded-circle" src="{{ url('Backend') }}/assets/img/team/3-thumb.png" alt="" />
          </div>
        </a>
        <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
          <div class="bg-white dark__bg-1000 rounded-2 py-2">
            <a class="dropdown-item fw-bold text-warning" href="#!"><span class="fas fa-crown me-1"></span><span>Go Pro</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#!">Set status</a>
            <a class="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
            <a class="dropdown-item" href="#!">Feedback</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="pages/user/settings.html">Settings</a>
            <a class="dropdown-item" href="pages/authentication/card/logout.html">Logout</a>
          </div>
        </div>
      </li>
    </ul>
  </nav>
