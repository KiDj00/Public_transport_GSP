<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dolazak extends Model
{
    use HasFactory;
    protected $fillable = [
        'linija',
        'stanica',
        'vremeDolaska',
    ];
    public function linija()
    {
        return $this->belongsTo(Linija::class);

    }
    public function stanica()
    {
        return $this->belongsTo(Stanica::class);

    }
}