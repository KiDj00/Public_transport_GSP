<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DestinacijaController;
use App\Http\Controllers\LinijaController;
use App\Http\Controllers\DolazakController;
use App\Http\Controllers\PorukaController;
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
Route::get('destinacije', [DestinacijaController::class, 'index']);

Route::get('kontakt', [PorukaController::class, 'index']); //samo admin moze da vidi poruke
Route::post('kontakt', [PorukaController::class, 'primiPoruku']); //ulogovan ili ne svako moze da nam posalje poruku

Route::get('linije', [LinijaController::class, 'index']);
Route::get('linije/{id}', [LinijaController::class, 'show']);
Route::post('linije/', [LinijaController::class, 'store']);
Route::put('linije/{id}', [LinijaController::class, 'update']);
Route::delete('linije/{id}', [LinijaController::class, 'destroy']);

Route::get('dolazak', [DolazakController::class, 'index']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    //obicni ulogovani korisnici
    Route::get('/profiles', function (Request $request) {
        //ovo nam omogucava da prikazemo ulogovanog korisnika
        return auth()->user();
    });
    Route::get('/profiles', function (Request $request) {
        //ovo nam omogucava da prikazemo ulogovanog korisnika
        return auth()->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']); //ako je korisnik ulogovan moze da se odjavi
});

Route::middleware(['auth:sanctum', 'isAPIAdmin'])->group(function () {
    //ako je ulogovan admin

    Route::get('/proveri', function () {
        return response()->json(
            ['message' => 'You are in', 'status' => 200],
            200
        );
    });
});
