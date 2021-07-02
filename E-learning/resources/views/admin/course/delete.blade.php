@extends('layouts.sidebar')
@section('content')
<div class="main-panel" id="main-panel">

    <div id="wrapper">

        <div class="content">
            <div class="row">
                <div class="col-md-12">

                    <div id="main-content">
                        <nav class="navbar navbar-light bg-light ">
                            <a class="navbar-brand"> </a>


                        </nav>

                        <div id=" main-content" class="main">

                            <div class="col-xl-8 order-xl-1">
                                <div class="card bg-secondary shadow">
                                    <div class="card-header bg-white border-0">
                                        <div class="row align-items-center">
                                            <div class="col-8">
                                                <h3 class="mb-0">Course Information</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <form method="post">
                                            <div class="pl-lg-4">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group focused">
                                                            <label class="form-control-label"
                                                                for="input-username">Course Name</label>
                                                            <h3> {{$course->c_name}} </h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-control-label" for="input-email">Status
                                                                address</label>
                                                            <h3> {{$course->status}} </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group focused">
                                                            <label class="form-control-label"
                                                                for="input-first-name">Enrolled</label>
                                                            <h3> {{$course->enrolled}} </h3>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="form-group focused">
                                                            <label class="form-control-label" for="course">
                                                                Course Teacher</label>
                                                            <h3> {{$course->i_id}} </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="my-4">
                                            <!-- Address -->
                                            <h6 class="heading-small text-muted mb-4">Contact information</h6>
                                            <div class="pl-lg-4">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group focused">
                                                            <label class="form-control-label" for="input-address">Course
                                                                Teacher</label>

                                                            <h3> {{$course->i_id}} </h3>
                                                        </div>
                                                    </div>


                                                </div>
                                                <button class="btn btn-danger">Delete</button>
                                                <a class="btn btn-info" href="{{route('course.list')}}">Back</a>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                @endsection
                </body>



                </html>