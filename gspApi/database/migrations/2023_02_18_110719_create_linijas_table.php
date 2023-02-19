<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinijasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linijas', function (Blueprint $table) {
            $table->id();
            $table->string('brojLinije');
            $table->integer('vreme');
            $table->integer('interval')->default(6); //ovo predstavlja na kolko minuta autobus polazi sa pocetne stanice, npr na svakih 5 min

            $table->foreignId('pocetnaDestinacija');
            $table->foreignId('zavrsnaDestinacija');
            $table->foreignId('tipLinije')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('linijas');
    }
}
