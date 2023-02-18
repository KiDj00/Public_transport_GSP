<?php

namespace Database\Seeders;

use App\Models\Destinacija;
use Illuminate\Database\Seeder;

class DestinacijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $d1= new Destinacija();
        $d1->naziv="Zeleni venac";
        $d1->save();

        $d2= new Destinacija();
        $d2->naziv="Zemun stari grad";
        $d2->save();

        $d3= new Destinacija();
        $d3->naziv="Zemun Novi grad";
        $d3->save();

        $d4= new Destinacija();
        $d4->naziv="Altina";
        $d4->save();

        $d5= new Destinacija();
        $d5->naziv="Zemun polje";
        $d5->save();

        $d6= new Destinacija();
        $d6->naziv="Beograd na vodi";
        $d6->save();

        $d7= new Destinacija();
        $d7->naziv="Slavija";
        $d7->save();

        $d8= new Destinacija();
        $d8->naziv="Resnik";
        $d8->save();

        $d9= new Destinacija();
        $d9->naziv="Pancevacki most";
        $d9->save();
        
        
        $d10= new Destinacija();
        $d10->naziv="Miljakovac 3";
        $d10->save();

        $d11= new Destinacija();
        $d11->naziv="Banjica 2";
        $d11->save();

        $d12= new Destinacija();
        $d12->naziv="Novi Beograd/Blok 45";
        $d12->save();
    }
}
