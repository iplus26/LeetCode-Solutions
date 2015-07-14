int cal(int x){
	int s = 0;
	while( x > 0 ){
		s += (x%10) * (x%10);
		x /= 10;
	}
	
	return s;
}

bool isHappy (int n){
	int x = n;
	int y = n;
	while(1){
		x = cal(x);
		if(x==1) return true;
		
		y =  cal(cal(y));
		if(y==1) return true;
		
		if(x==y) return false;
	}
	
	return true;
}