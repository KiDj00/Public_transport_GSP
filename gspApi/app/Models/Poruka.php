<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Poruka extends Model
{
    use HasFactory;
    protected $fillable = ['ime', 'email', 'poruka'];
}
