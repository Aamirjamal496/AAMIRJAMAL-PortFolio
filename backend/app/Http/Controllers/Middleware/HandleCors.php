<?php
use Closure;
class HandleCors{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next){
        return $next($request)
        ->header('Access-Control-Allow-Origin', '*')  // Allows all domains, change it to your frontend URL in production
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
            ->header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
    }
    
}
