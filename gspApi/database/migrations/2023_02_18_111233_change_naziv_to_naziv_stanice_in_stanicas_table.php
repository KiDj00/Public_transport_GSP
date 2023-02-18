<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeNazivToNazivStaniceInStanicasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('stanicas', function (Blueprint $table) {
            $table->renameColumn('naziv','nazivStanice');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('stanicas', function (Blueprint $table) {
            $table->renameColumn('nazivStanice','naziv');
        });
    }
}
