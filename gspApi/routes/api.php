<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LinijaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('linije', [LinijaController::class, 'index']);
Route::get('linije/{id}', [LinijaController::class, 'show']);

Route::group(['middleware' => ['auth:sanctum']], function () {//ako je korisnik ulogovan moze da vrsi operacije dodavanja, azuriranja i brisanja
    Route::get('/profiles', function (Request $request) { //ovo nam omogucava da prikazemo ulogovanog korisnika
        return auth()->user();
    });
    Route::delete('linije/{id}', [LinijaController::class, 'destroy']);

    Route::post('linije/', [LinijaController::class, 'store']);
    Route::put('linije/{id}', [LinijaController::class, 'update']);




    Route::post('/logout', [AuthController::class, 'logout']); //ako je korisnik ulogovan moze da se odjavi
});