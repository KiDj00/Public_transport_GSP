<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PopuniUserTabelu extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->string('phone')->default("+38161 5424 9544") ;
            $table->string('drzava')->default("Serbia") ;

            $table->date('birthdate')->default('1987-4-6') ;
            $table->boolean('admin')->default(false);

        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {

            $table->removeColumn('phone');
            $table->removeColumn('birthdate');
            $table->removeColumn('admin');

        });
    }
}