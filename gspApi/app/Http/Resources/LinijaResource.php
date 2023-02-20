<?php

namespace App\Http\Resources;

use App\Models\Destinacija;
use App\Models\TipLinije;
use Illuminate\Http\Resources\Json\JsonResource;

class LinijaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'brojLinije' => $this->resource->brojLinije,
            'vreme' => $this->resource->vreme,
            'pocetnaDestinacija' => new DestinacijaResource(
                Destinacija::find($this->resource->pocetnaDestinacija)
            ),
            'zavrsnaDestinacija' => new DestinacijaResource(
                Destinacija::find($this->resource->zavrsnaDestinacija)
            ),
            'zona' => $this->resource->zona,
            'tipLinije' => TipLinije::find($this->resource->tipLinije),
            'interval' => $this->resource->interval,
        ];
    }
}
