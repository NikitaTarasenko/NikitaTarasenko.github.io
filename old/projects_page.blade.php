@extends('layouts.app')

@section('content')
    <div id="content" class="app-content" role="main">
  	<div class="app-content-body">
      <div class="hbox hbox-auto-xs hbox-auto-sm" ng-init="
          app.settings.asideFolded = false; 
          app.settings.asideDock = false;
        ">
        <!-- main -->
        <div class="col">
          <div id="breadcrumbs">
            <a href="#">Дашборд</a>
            <span>Заявки</span>
          </div>

          <div id="heading">
            <h1>Заявки</h1>
            <div class="tools">
              
            @if (Auth::user()->creator==1)
              <div id="add-project" class="actionable">
                <div class="caption">Додати <span class="button">+</span></div>
                <div class="items">
                    <div class="create-folder" ><i class="fa fa-folder"></i> <a href="/add_project_page">Нова заявка</a></div>
                 
                </div>
              </div>
            @endif
            </div>
          </div>
            
            @if(isset($waiting))
                <div id="my-projects" class="projects-group">
                  <div class="heading">
                    <div class="lined-title"><span class="text">Чекають вашої відповіді</span><span class="line"></span></div>
                    <!--<div class="sort">
                      <span class="caption">Sort by</span>
                      <span class="type actionable">
                        <span class="current"><span class="text">Time of creation</span> <i class="fa fa-angle-down"></i></span>
                        <span class="list">
                          <span class="option"><i class="fa fa-calendar"></i> <span class="text">Time of creation</span></span>
                          <span class="option"><i class="fa fa-sort-alpha-asc"></i> <span class="text">Alphebetical</span></span>
                          <span class="option"><i class="fa fa-user"></i> <span class="text">User Name</span></span>
                          <span class="option"><i class="icon-settings"></i> <span class="text">Something Else</span></span>
                        </span>
                      </span>
                    </div>-->
                  </div>
                  <div class="projects-container">

                      <div class="project ">
                          <a href="/add_project_page">
                              <div class="inner-content">
                                  <img src="\img\createproject.png" class="add_proj_img">
                              </div>
                          </a>
                          <div class="title"><a href="/add_project_page" >Додати заявку</a></div>
                        </div>

                  @foreach ($waiting as $folder)    
                  <div class="project bordered">
                     <!--
                      <div class="settings-button actionable">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>-->
                      <div class="context-menu">
                        <div class="item"><i class="fa fa-user"></i> <span class="text">Operation one</span></div>
                        <hr>
                        <div class="item">
                          <i class="fa fa-user"></i><span class="text">Operation two</span><i class="fa fa-angle-right"></i>
                          <div class="list">
                            <div class="item"><i class="fa fa-user"></i> <span class="text">Next level one</span></div>
                            <hr>
                            <div class="item"><i class="fa fa-user"></i> <span class="text">Next level two</span></div>
                          </div>
                        </div>
                        <hr>
                        <div class="item"><i class="fa fa-user"></i> <span class="text">Operation three</span></div>
                      </div>
                      <a href="/folder/{{$folder->id}}">
                      <div class="inner-content">
                        <div class="date-of-creation">
                          <span class="value">
                            <div class="hover-description"><div>Остання зміна</div></div>
                            <span class="date">{{ \Carbon\Carbon::parse($folder->updated_at)->format('d.m.Y')}}</span>
                            <span class="time">{{ \Carbon\Carbon::parse($folder->updated_at)->format('H:i')}}</span>
                          </span>
                        </div>


                        <div class="notifications">{{$folder->materials->count()}}</div>
                        <div class="info-row">
                          <div class="followers">
                            <span class="count">
                              <!--<div class="hover-description">
                                <div class="lined-title"><span class="text">Developer</span><span class="line"></span></div>
                                <div class="follower">Oleg</div>
                                <div class="follower">Ihor</div>
                                <div class="lined-title"><span class="text">Client</span><span class="line"></span></div>
                                <div class="follower">Fil</div>
                                <div class="lined-title"><span class="text">Project manager</span><span class="line"></span></div>
                                <div class="follower">Artem</div>
                              </div>
                              <i class="fa fa-user"></i> 0-->
                            </span> 
                              <!--
                            <span class="add" onclick="showForm(this)">
                              <div class="hover-description"><div>Додати</div></div>
                              +
                            </span>-->
                          </div>
                          <div class="favourite" onclick="this.classList.toggle('active')">
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star-o default" style="opacity:0;"></i>
                          </div>
                        </div>
                        <div class="new-follower-form">
                          <form action="#">
                            <input type="text" class="form-control" name="name" placeholder="Name" required>
                            <input type="text" class="form-control" name="email" placeholder="Email" required>
                            <select name="role" class="form-control">
                              <option value="developer">Developer</option>
                              <option value="client">Client</option>
                              <option value="project_manager">Project manager</option>
                            </select>
                            <button type="submit" class="submit-button">OK</button>
                            <button type="reset"  class="reset-button" onclick="closeForm(this)">Cancel</button>
                          </form>
                        </div>
                      </div>
                      </a>

                      <div class="title"><a href="/folder/{{$folder->id}}">{{$folder->name}}</a></div>
                    </div>
                  @endforeach

                  </div>
                </div>
            @endif
           
            @if(isset($answered))
                <div id="my-projects" class="projects-group">
                  <div class="heading">
                    <div class="lined-title"><span class="text">Отвеченние</span><span class="line"></span></div>
                    <!--<div class="sort">
                      <span class="caption">Sort by</span>
                      <span class="type actionable">
                        <span class="current"><span class="text">Time of creation</span> <i class="fa fa-angle-down"></i></span>
                        <span class="list">
                          <span class="option"><i class="fa fa-calendar"></i> <span class="text">Time of creation</span></span>
                          <span class="option"><i class="fa fa-sort-alpha-asc"></i> <span class="text">Alphebetical</span></span>
                          <span class="option"><i class="fa fa-user"></i> <span class="text">User Name</span></span>
                          <span class="option"><i class="icon-settings"></i> <span class="text">Something Else</span></span>
                        </span>
                      </span>
                    </div>-->
                  </div>
                  <div class="projects-container">


                  @foreach ($answered as $folder)    
                  <div class="project bordered">
                     <!--
                      <div class="settings-button actionable">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>-->
                      <div class="context-menu">
                        <div class="item"><i class="fa fa-user"></i> <span class="text">Operation one</span></div>
                        <hr>
                        <div class="item">
                          <i class="fa fa-user"></i><span class="text">Operation two</span><i class="fa fa-angle-right"></i>
                          <div class="list">
                            <div class="item"><i class="fa fa-user"></i> <span class="text">Next level one</span></div>
                            <hr>
                            <div class="item"><i class="fa fa-user"></i> <span class="text">Next level two</span></div>
                          </div>
                        </div>
                        <hr>
                        <div class="item"><i class="fa fa-user"></i> <span class="text">Operation three</span></div>
                      </div>
                      <a href="/folder/{{$folder->id}}">
                      <div class="inner-content">
                        <div class="date-of-creation">
                          <span class="value">
                            <div class="hover-description"><div>Остання зміна</div></div>
                            <span class="date">{{ \Carbon\Carbon::parse($folder->updated_at)->format('d.m.Y')}}</span>
                            <span class="time">{{ \Carbon\Carbon::parse($folder->updated_at)->format('H:i')}}</span>
                          </span>
                        </div>


                        <div class="notifications">{{$folder->materials->count()}}</div>
                        <div class="info-row">
                          <div class="followers">
                            <span class="count">
                              <!--<div class="hover-description">
                                <div class="lined-title"><span class="text">Developer</span><span class="line"></span></div>
                                <div class="follower">Oleg</div>
                                <div class="follower">Ihor</div>
                                <div class="lined-title"><span class="text">Client</span><span class="line"></span></div>
                                <div class="follower">Fil</div>
                                <div class="lined-title"><span class="text">Project manager</span><span class="line"></span></div>
                                <div class="follower">Artem</div>
                              </div>
                              <i class="fa fa-user"></i> 0-->
                            </span> 
                              <!--
                            <span class="add" onclick="showForm(this)">
                              <div class="hover-description"><div>Додати</div></div>
                              +
                            </span>-->
                          </div>
                          <div class="favourite" onclick="this.classList.toggle('active')">
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star-o default" style="opacity:0;"></i>
                          </div>
                        </div>
                        <div class="new-follower-form">
                          <form action="#">
                            <input type="text" class="form-control" name="name" placeholder="Name" required>
                            <input type="text" class="form-control" name="email" placeholder="Email" required>
                            <select name="role" class="form-control">
                              <option value="developer">Developer</option>
                              <option value="client">Client</option>
                              <option value="project_manager">Project manager</option>
                            </select>
                            <button type="submit" class="submit-button">OK</button>
                            <button type="reset"  class="reset-button" onclick="closeForm(this)">Cancel</button>
                          </form>
                        </div>
                      </div>
                      </a>

                      <div class="title"><a href="/folder/{{$folder->id}}">{{$folder->name}}</a></div>
                    </div>
                  @endforeach

                  </div>
                </div>
            @endif
            
            @if(isset($archive))
                <div id="my-projects" class="projects-group">
                  <div class="heading">
                    <div class="lined-title"><span class="text">Архів</span><span class="line"></span></div>
                    <!--<div class="sort">
                      <span class="caption">Sort by</span>
                      <span class="type actionable">
                        <span class="current"><span class="text">Time of creation</span> <i class="fa fa-angle-down"></i></span>
                        <span class="list">
                          <span class="option"><i class="fa fa-calendar"></i> <span class="text">Time of creation</span></span>
                          <span class="option"><i class="fa fa-sort-alpha-asc"></i> <span class="text">Alphebetical</span></span>
                          <span class="option"><i class="fa fa-user"></i> <span class="text">User Name</span></span>
                          <span class="option"><i class="icon-settings"></i> <span class="text">Something Else</span></span>
                        </span>
                      </span>
                    </div>-->
                  </div>
                  <div class="projects-container">


                  @foreach ($archive as $folder)    
                  <div class="project bordered">
                     <!--
                      <div class="settings-button actionable">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>-->
                      <div class="context-menu">
                        <div class="item"><i class="fa fa-user"></i> <span class="text">Operation one</span></div>
                        <hr>
                        <div class="item">
                          <i class="fa fa-user"></i><span class="text">Operation two</span><i class="fa fa-angle-right"></i>
                          <div class="list">
                            <div class="item"><i class="fa fa-user"></i> <span class="text">Next level one</span></div>
                            <hr>
                            <div class="item"><i class="fa fa-user"></i> <span class="text">Next level two</span></div>
                          </div>
                        </div>
                        <hr>
                        <div class="item"><i class="fa fa-user"></i> <span class="text">Operation three</span></div>
                      </div>
                      <a href="/folder/{{$folder->id}}">
                      <div class="inner-content">
                        <div class="date-of-creation">
                          <span class="value">
                            <div class="hover-description"><div>Остання зміна</div></div>
                            <span class="date">{{ \Carbon\Carbon::parse($folder->updated_at)->format('d.m.Y')}}</span>
                            <span class="time">{{ \Carbon\Carbon::parse($folder->updated_at)->format('H:i')}}</span>
                          </span>
                        </div>


                        <div class="notifications">{{$folder->materials->count()}}</div>
                        <div class="info-row">
                          <div class="followers">
                            <span class="count">
                              <!--<div class="hover-description">
                                <div class="lined-title"><span class="text">Developer</span><span class="line"></span></div>
                                <div class="follower">Oleg</div>
                                <div class="follower">Ihor</div>
                                <div class="lined-title"><span class="text">Client</span><span class="line"></span></div>
                                <div class="follower">Fil</div>
                                <div class="lined-title"><span class="text">Project manager</span><span class="line"></span></div>
                                <div class="follower">Artem</div>
                              </div>
                              <i class="fa fa-user"></i> 0-->
                            </span> 
                              <!--
                            <span class="add" onclick="showForm(this)">
                              <div class="hover-description"><div>Додати</div></div>
                              +
                            </span>-->
                          </div>
                          <div class="favourite" onclick="this.classList.toggle('active')">
                            <i class="fa fa-star active"></i>
                            <i class="fa fa-star-o default" style="opacity:0;"></i>
                          </div>
                        </div>
                        <div class="new-follower-form">
                          <form action="#">
                            <input type="text" class="form-control" name="name" placeholder="Name" required>
                            <input type="text" class="form-control" name="email" placeholder="Email" required>
                            <select name="role" class="form-control">
                              <option value="developer">Developer</option>
                              <option value="client">Client</option>
                              <option value="project_manager">Project manager</option>
                            </select>
                            <button type="submit" class="submit-button">OK</button>
                            <button type="reset"  class="reset-button" onclick="closeForm(this)">Cancel</button>
                          </form>
                        </div>
                      </div>
                      </a>

                      <div class="title"><a href="/folder/{{$folder->id}}">{{$folder->name}}</a></div>
                    </div>
                  @endforeach

                  </div>
                </div>
            @endif
            
            @if(!isset($archive) && !isset($answered) && !isset($waiting) && (Auth::user()->creator!=1))
            <p style="font-size:16px;"><br>Данных для отображения нет.</p>
            @endif

          <div id="dark-block"></div>
        </div>
      </div>
	</div>
  </div>

<div class="modal fade" id="add_project" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
       <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Додати заявку</h4>
            </div>
            <div class="modal-body wrapper-lg">
              <div class="form-container projecting-block panel container">
                  <form role="form" method="post" action="/add_project">
                       @csrf
                <div class="row">
                     <div class="col-lg-12">
                         <h2>Проектування</h2>
                         <div class="wide-input">
                             <label for="tm3">TM</label>
                             <select name="tm" required id="tm3" class="form-control">
                                 <option value="">Вибрати</option>
                                @foreach($trademarks as $trademark)
                                    <option value="{{ $trademark->id }}">{{ $trademark->name }}</option>
                                @endforeach
                             </select>
                             
                         </div>
                     </div>
                 </div>
                <div class="row">
                    <div class="col-lg-12">
                        <h4>Мета проекту:</h4>
                        <div class="goals_checkbox_group">
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-1.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Макет покування</span>
                                        <input type="checkbox" name="types[]" value="1">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-5.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Інструкція</span>
                                        <input type="checkbox" name="types[]" value="5">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-2.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Етикетка на товар</span>
                                        <input type="checkbox" name="types[]" value="2">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-6.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Промдизайн</span>
                                        <input type="checkbox" name="types[]" value="6">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-3.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Стикер на пакування</span>
                                        <input type="checkbox" name="types[]" value="3">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-7.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">POS/реклама</span>
                                        <input type="checkbox" name="types[]" value="7">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-4.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Хендтаг</span>
                                        <input type="checkbox" name="types[]" value="4">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <div class="goals-image"><img src="/img/icon-8.jpg" alt=""></div>
                                    <label class="i-checks">
                                        <span class="goals-label">Перевірка виробника</span>
                                        <input type="checkbox" name="types[]" value="8">
                                        <i></i>
                                    </label>
                                </div>
                    
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="wide-input">
                            <label for="department">Відділ:</label>
                            <input type="text" value="@if (isset($team_name)){{$team_name}} @endif" class="form-control" id="department" placeholder="Назва відділу" disabled>
                        </div>
                    </div>
                </div>
                <div class="mrgin clearfix"></div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="wide-input">
                            <label for="name2">Назва:</label>
                            <input type="text" name="name" required value="" class="form-control" id="name2" placeholder="UP-70-0001">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                       <h4>Географія робіт:</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="geo_checkbox_group">
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12 checkbox">
                                    <label class="i-checks">
                                        Імпорт
                                        <input type="checkbox" name="geo[]" value="1">
                                        <i></i>
                                    </label>
                                </div>
                                <div class="col-md-6 col-xs-12  checkbox">
                                    <label class="i-checks">
                                        Україна
                                        <input type="checkbox" name="geo[]" value="2">
                                        <i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkbox m-t-lg">
                      <button type="submit" class="btn btn-sm btn-primary " ><strong>Додати</strong></button>
                    </div>
                </form>
                </div>
                
              </div>
            </div>
        </div>
    </div>
</div>

<script>
  var darkBlock = document.getElementById('dark-block');
  function initActivation(block) {
    block.onclick = function(e) {
      e.stopPropagation();
      block.classList.add('active');
      darkBlock.classList.add('active');
    };
    document.addEventListener('click', function() {
      block.classList.remove('active');
      darkBlock.classList.remove('active');
    });
  };
  
  function showForm(elem) {
     $(elem).closest('.inner-content').find('.new-follower-form').addClass('active');
  };
  
  function closeForm(elem) {
     $(elem).closest('.new-follower-form').removeClass('active');
  };
  
  window.onload = function() {
    [].forEach.call(document.querySelectorAll('.actionable'), initActivation);
    
    $('.sort .type .option').click(function(e) {
      e.stopPropagation();
      $(this).closest('.type').removeClass('active');
      darkBlock.classList.remove('active');
      $(this).closest('.type').find('.current .text').text($(this).text());
    });
    
  };

  

</script>
 @push('style_template')
        <link rel="stylesheet" href="{{ asset('css/proposal-form.css') }}" type="text/css" />
    @endpush
    @push('scripts_template')
        <script src="{{ asset('js/proposal-form.js') }}"></script>
    @endpush
@endsection
