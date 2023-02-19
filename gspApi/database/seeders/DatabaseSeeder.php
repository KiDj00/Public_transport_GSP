<?php

namespace Database\Seeders;

use App\Models\Destinacija;
use App\Models\Dolazak;
use App\Models\Linija;
use App\Models\Poruka;
use App\Models\Stanica;
use App\Models\TipLinije;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();
        Dolazak::truncate();
        Stanica::truncate();
        Linija::truncate();
        Destinacija::truncate();
        Poruka::truncate();
        TipLinije::truncate();

        User::factory(10)->create();
        
        User::factory(10)->create();
        //kreiracemo ovde admina
        $admin = new User();
        $admin->name="Admin";
        $admin->email="admin@gmail.com";
        $admin->password= Hash::make("admin");
        $admin->admin = 1;
       $admin->save();


        $tl1 = new TipLinije();
        $tl1->naziv="autobuska";
        $tl1->save();

        $tl2 = new TipLinije();
        $tl2->naziv="tramvajska";
        $tl2->save();

        $tl3 = new TipLinije();
        $tl3->naziv="voz";
        $tl3->save();

        $ds = new DestinacijaSeeder();
        $ds->run();

        $ls = new LinijaSeeder();
        $ls->run();


        $ss = new StanicaSeeder();
        $ss->run();

        $dos=new DolazakSeeder();
        $dos->run();

    }
}
