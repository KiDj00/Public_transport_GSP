<?php

namespace Database\Seeders;

use App\Models\Linija;
use Illuminate\Database\Seeder;

class LinijaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            $l1=new Linija();
            $l1->brojLinije=15;
            $l1->vreme=46;
            $l1->pocetnaDestinacija=3;
            $l1->zavrsnaDestinacija=1;
            $l1->zona=1;
            $l1->tipLinije=1;
            $l1->interval =5 ;
            $l1->save();

            $l2=new Linija();
            $l2->brojLinije=47;
            $l2->vreme=35;
            $l2->pocetnaDestinacija=7;
            $l2->zavrsnaDestinacija=8;
            $l2->zona=1;
            $l2->tipLinije=1;
            $l2->interval =7 ;

            $l2->save();

            $l3=new Linija();
            $l3->brojLinije=78;
            $l3->vreme=67;
            $l3->pocetnaDestinacija=3;
            $l3->zavrsnaDestinacija=11;
            $l3->zona=1;
            $l3->tipLinije=1;
            $l3->interval =25 ;

            $l3->save();

            $l4=new Linija();
            $l4->brojLinije=45;
            $l4->vreme=48;
            $l4->pocetnaDestinacija=3;
            $l4->zavrsnaDestinacija=12;
            $l4->zona=1;
            $l4->tipLinije=1;
            $l4->interval =19 ;

            $l4->save();


            $l5=new Linija();
            $l5->brojLinije=708;
            $l5->vreme=59;
            $l5->pocetnaDestinacija=3;
            $l5->zavrsnaDestinacija=5;
            $l5->zona=2;
            $l5->tipLinije=1;
            $l5->interval =15 ;

            $l5->save();




    }
}
