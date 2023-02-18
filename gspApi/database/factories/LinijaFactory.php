<?php

namespace Database\Factories;

use App\Models\Destinacija;
use Illuminate\Database\Eloquent\Factories\Factory;

class LinijaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'brojLinije'=>$this->faker->randomElement($array = array ('15','78','45','81L','73','48'), $count = 1),
            'vreme'=>$this->faker->numberBetween($min = 30, $max = 60),
            'pocetnaDestinacija'=> Destinacija::find(random_int(1,Destinacija::count())),
            'zavrsnaDestinacija'=> Destinacija::find(random_int(1,Destinacija::count())),
            'zona'=>$this->faker->randomElement($array = array (1,2,3,4), $count = 1),
        ];
    }
}