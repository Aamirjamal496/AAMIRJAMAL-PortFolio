<?php
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillsController;
use illuminate\Http\Request;
use illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/users',[UserController::class,"index"]);
Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);
Route::post('logout',[UserController::class, 'logout']);

// Home Routes
Route::post('/contact',[MessageController::class,'contact']);
Route::get('/gethomeskill',[SkillsController::class,'getHomeSkills']);
Route::get('gethomeprojects',[ProjectController::class,'getHomeProjects']);

// Admin Routes
Route::middleware('auth:sanctum')->group(function(){
    // Project Routes
    Route::post('/projects',[ProjectController::class,'store']);
    Route::get('/getprojects',[ProjectController::class,'getProjects']);
    Route::delete('deleteProject/{id}',[ProjectController::class, 'destroy']);
    // Skills Routes
    Route::post('/skills',[SkillsController::class, 'store']);
    Route::get('/getskills',[SkillsController::class,'getSkills']);
    Route::delete('deleteSkill/{id}',[SkillsController::class,'destroy']);
    // Messages Routes
    Route::get('/messages',[MessageController::class,'getMessages']);
    Route::delete('/delete/{id}',[MessageController::class,'destroy']);
});