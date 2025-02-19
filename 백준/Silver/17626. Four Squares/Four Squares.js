const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const solution =(number)=>{
    const dp = Array.from({ length: number + 1 }, () => 0);
    dp[1] = 1;

    for (let i = 2; i <= number; i++) {
        let min = Number.MAX_SAFE_INTEGER;

        for (let j = 1; j * j <= i; j++) {
            min = Math.min(min, dp[i - j * j]);
        }

        dp[i] = min + 1;
    }

  return dp[number];
}

console.log(solution(N))