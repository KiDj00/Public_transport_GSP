<?php

namespace Database\Seeders;

use App\Models\Dolazak;
use App\Models\Stanica;
use Illuminate\Database\Seeder;

class DolazakSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       //autobus sa idijem 1 ide na stanice sa idijem 1 2 3 4 
         $d1 =  new Dolazak();
         $d1->linija = 1;  
         $d1->stanica =1; 
         $d1->save();

         $d2 =  new Dolazak();
         $d2->linija = 1;  
         $d2->stanica =2; 
         $d2->save();

         $d3 =  new Dolazak();
         $d3->linija = 1;  
         $d3->stanica =3; 
         $d3->save();

         $d4 =  new Dolazak();
         $d4->linija = 1;  
         $d4->stanica =4; 
         $d4->save();

    //autobus sa idijem 2 ide na stanice sa idijem  1 3 4 5 
        $d5 =  new Dolazak();
        $d5->linija = 2;  
        $d5->stanica =1; 
        $d5->save();


        $d6 =  new Dolazak();
        $d6->linija = 2;  
        $d6->stanica =3; 
        $d6->save();

        $d7 =  new Dolazak();
        $d7->linija = 2;  
        $d7->stanica =4; 
        $d7->save();

        $d8 =  new Dolazak();
        $d8->linija = 2;  
        $d8->stanica =5; 
        $d8->save();

        //ovako dodati za sve linije koje hocete
    }
}
