<?php

namespace Database\Factories;

use App\Models\Linija;
use App\Models\Stanica;
use Illuminate\Database\Eloquent\Factories\Factory;

class DolazakFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'linija'=> Linija::find(random_int(1,Linija::count())),
            'stanica'=> Stanica::find(random_int(1,Stanica::count())),
            'vremeDolaska'=> $this->faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now', $timezone = null)

        ];
    }
}
