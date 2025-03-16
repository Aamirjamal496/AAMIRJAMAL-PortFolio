<?php

namespace App\Providers;

// use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    protected $namespace = 'App\Http\Controllers';
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        Route::middleware('api')
        ->prefix('api')
        ->group(base_path('routes/api.php'));
    }
    public function map(){
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }
    protected function mapApiRoutes(){
        Route::middleware('api')->prefix('api')->group(base_path('routes/api.php'));
    }
    protected function mapWebRoutes(){
        Route::middleware('web')->group(base_path('routes/web.php'));
    }  
}
