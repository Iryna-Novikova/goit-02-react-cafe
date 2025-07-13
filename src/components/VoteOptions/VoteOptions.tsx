import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button onClick={onVote} className={css.button} data-value="good">
        Good
      </button>
      <button onClick={onVote} className={css.button} data-value="neutral">
        Neutral
      </button>
      <button onClick={onVote} className={css.button} data-value="bad">
        Bad
      </button>
      {canReset && (
        <button onClick={onReset} className={`${css.button} ${css.reset}`}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
