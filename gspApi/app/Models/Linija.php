<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Linija extends Model
{
    use HasFactory;
    protected $fillable = [
        'brojLinije',
        'vreme',
        'pocetnaDestinacija',
        'zavrsnaDestinacija',
        'zona',
        'tipLinije',
    ];
    public function pocetnaDestinacija()
    {
        return $this->belongsTo(Destinacija::class);
    }
    public function krajnjaDestinacija()
    {
        return $this->belongsTo(Destinacija::class);
    }
    public function stanice()
    {
        return $this->hasMany(Stanica::class);
    }
    public function tip()
    {
        return $this->belongsTo(TipLinije::class);
    }
}
